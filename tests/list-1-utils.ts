import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BondSet,
  Initialized,
  LivenessSet,
  OwnershipTransferred,
  RevisionApproved,
  RevisionExecuted,
  RevisionProposed,
  RevisionRejected,
  RewardsSet
} from "../generated/list1/list1"

export function createBondSetEvent(bondAmount: BigInt): BondSet {
  let bondSetEvent = changetype<BondSet>(newMockEvent())

  bondSetEvent.parameters = new Array()

  bondSetEvent.parameters.push(
    new ethereum.EventParam(
      "bondAmount",
      ethereum.Value.fromUnsignedBigInt(bondAmount)
    )
  )

  return bondSetEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLivenessSetEvent(liveness: BigInt): LivenessSet {
  let livenessSetEvent = changetype<LivenessSet>(newMockEvent())

  livenessSetEvent.parameters = new Array()

  livenessSetEvent.parameters.push(
    new ethereum.EventParam(
      "liveness",
      ethereum.Value.fromUnsignedBigInt(liveness)
    )
  )

  return livenessSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRevisionApprovedEvent(
  revisionId: BigInt
): RevisionApproved {
  let revisionApprovedEvent = changetype<RevisionApproved>(newMockEvent())

  revisionApprovedEvent.parameters = new Array()

  revisionApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "revisionId",
      ethereum.Value.fromUnsignedBigInt(revisionId)
    )
  )

  return revisionApprovedEvent
}

export function createRevisionExecutedEvent(
  revisionId: BigInt
): RevisionExecuted {
  let revisionExecutedEvent = changetype<RevisionExecuted>(newMockEvent())

  revisionExecutedEvent.parameters = new Array()

  revisionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "revisionId",
      ethereum.Value.fromUnsignedBigInt(revisionId)
    )
  )

  return revisionExecutedEvent
}

export function createRevisionProposedEvent(
  revisionId: BigInt,
  proposedPrice: BigInt,
  pendingAddresses: Array<Address>
): RevisionProposed {
  let revisionProposedEvent = changetype<RevisionProposed>(newMockEvent())

  revisionProposedEvent.parameters = new Array()

  revisionProposedEvent.parameters.push(
    new ethereum.EventParam(
      "revisionId",
      ethereum.Value.fromUnsignedBigInt(revisionId)
    )
  )
  revisionProposedEvent.parameters.push(
    new ethereum.EventParam(
      "proposedPrice",
      ethereum.Value.fromSignedBigInt(proposedPrice)
    )
  )
  revisionProposedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingAddresses",
      ethereum.Value.fromAddressArray(pendingAddresses)
    )
  )

  return revisionProposedEvent
}

export function createRevisionRejectedEvent(
  revisionId: BigInt
): RevisionRejected {
  let revisionRejectedEvent = changetype<RevisionRejected>(newMockEvent())

  revisionRejectedEvent.parameters = new Array()

  revisionRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "revisionId",
      ethereum.Value.fromUnsignedBigInt(revisionId)
    )
  )

  return revisionRejectedEvent
}

export function createRewardsSetEvent(
  addReward: BigInt,
  removeReward: BigInt
): RewardsSet {
  let rewardsSetEvent = changetype<RewardsSet>(newMockEvent())

  rewardsSetEvent.parameters = new Array()

  rewardsSetEvent.parameters.push(
    new ethereum.EventParam(
      "addReward",
      ethereum.Value.fromUnsignedBigInt(addReward)
    )
  )
  rewardsSetEvent.parameters.push(
    new ethereum.EventParam(
      "removeReward",
      ethereum.Value.fromUnsignedBigInt(removeReward)
    )
  )

  return rewardsSetEvent
}
