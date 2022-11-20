import {
  BondSet as BondSetEvent,
  Initialized as InitializedEvent,
  LivenessSet as LivenessSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RevisionApproved as RevisionApprovedEvent,
  RevisionExecuted as RevisionExecutedEvent,
  RevisionProposed as RevisionProposedEvent,
  RevisionRejected as RevisionRejectedEvent,
  RewardsSet as RewardsSetEvent
} from "../generated/list1/list1"
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
} from "../generated/schema"

export function handleBondSet(event: BondSetEvent): void {
  let entity = new BondSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bondAmount = event.params.bondAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLivenessSet(event: LivenessSetEvent): void {
  let entity = new LivenessSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liveness = event.params.liveness

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevisionApproved(event: RevisionApprovedEvent): void {
  let entity = new RevisionApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.revisionId = event.params.revisionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevisionExecuted(event: RevisionExecutedEvent): void {
  let entity = new RevisionExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.revisionId = event.params.revisionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevisionProposed(event: RevisionProposedEvent): void {
  let entity = new RevisionProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.revisionId = event.params.revisionId
  entity.proposedPrice = event.params.proposedPrice
  entity.pendingAddresses = event.params.pendingAddresses

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevisionRejected(event: RevisionRejectedEvent): void {
  let entity = new RevisionRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.revisionId = event.params.revisionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsSet(event: RewardsSetEvent): void {
  let entity = new RewardsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addReward = event.params.addReward
  entity.removeReward = event.params.removeReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
