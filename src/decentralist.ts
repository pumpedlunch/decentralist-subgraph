import { Bytes, BigInt } from '@graphprotocol/graph-ts'

import {
  RevisionExecuted as RevisionExecutedEvent,
} from "../generated/Decentralist/Decentralist"
import {
  RevisionExecuted,
  AddressList,
} from "../generated/schema"


export function handleRevisionExecuted(event: RevisionExecutedEvent): void {
  let entity = new RevisionExecuted(
    event.address.toHexString() + "-" + event.params.revisionId.toString()
  )
  entity.contract = event.address
  entity.revisionId = event.params.revisionId
  entity.price = event.params.proposedPrice
  let revisedAddresses = event.params.revisedAddresses.map<Bytes>((e: Bytes) => e)
  entity.revisedAddresses = revisedAddresses

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // load AddressList
  let entity2 = AddressList.load(event.address)
  // if no AddressList exists create one
  if(entity2 == null) {
    entity2 = new AddressList(event.address)
  }

  // set _addresses dummy to existing addresses or empty array
  let _addresses = entity2.addresses || new Array<Bytes>() 
  
  if(event.params.proposedPrice == BigInt.fromString("0")) {
    // handle address removals
    for(let i = 0; i < revisedAddresses.length; i++) {
      // find index and remove address from list
      const index = _addresses!.indexOf(revisedAddresses[i])
      if(index != -1) {
        _addresses!.splice(index, 1)
      }
    }
  } else {
    // else handle address additions
    for(let i = 0; i < revisedAddresses.length; i++) {
      // filter out 0x address
      if(revisedAddresses[i].toHexString() != "0x0000000000000000000000000000000000000000") {
        // if not on list, add
        if(_addresses!.indexOf(revisedAddresses[i]) == -1) {
          _addresses!.push(revisedAddresses[i])
        }
      }
    }
  }
  entity2.addresses = _addresses
  entity2.save()    
}