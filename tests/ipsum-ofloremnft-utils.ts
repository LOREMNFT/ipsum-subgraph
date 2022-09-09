import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  IpsumAdded,
  IpsumUpdated,
  IpsumUpdatednsfw,
  OwnershipTransferred
} from "../generated/IpsumOFLOREMNFT/IpsumOFLOREMNFT"

export function createIpsumAddedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  ipsumIdx: BigInt
): IpsumAdded {
  let ipsumAddedEvent = changetype<IpsumAdded>(newMockEvent())

  ipsumAddedEvent.parameters = new Array()

  ipsumAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  ipsumAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  ipsumAddedEvent.parameters.push(
    new ethereum.EventParam(
      "ipsumIdx",
      ethereum.Value.fromUnsignedBigInt(ipsumIdx)
    )
  )

  return ipsumAddedEvent
}

export function createIpsumUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  ipsumIdx: BigInt
): IpsumUpdated {
  let ipsumUpdatedEvent = changetype<IpsumUpdated>(newMockEvent())

  ipsumUpdatedEvent.parameters = new Array()

  ipsumUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  ipsumUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  ipsumUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ipsumIdx",
      ethereum.Value.fromUnsignedBigInt(ipsumIdx)
    )
  )

  return ipsumUpdatedEvent
}

export function createIpsumUpdatednsfwEvent(
  tokenContract: Address,
  tokenId: BigInt,
  ipsumIdx: BigInt
): IpsumUpdatednsfw {
  let ipsumUpdatednsfwEvent = changetype<IpsumUpdatednsfw>(newMockEvent())

  ipsumUpdatednsfwEvent.parameters = new Array()

  ipsumUpdatednsfwEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  ipsumUpdatednsfwEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  ipsumUpdatednsfwEvent.parameters.push(
    new ethereum.EventParam(
      "ipsumIdx",
      ethereum.Value.fromUnsignedBigInt(ipsumIdx)
    )
  )

  return ipsumUpdatednsfwEvent
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
