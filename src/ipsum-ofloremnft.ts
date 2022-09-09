import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  IpsumOFLOREMNFT,
  IpsumAdded,
  IpsumUpdated,
  IpsumUpdatednsfw,
  OwnershipTransferred
} from "../generated/IpsumOFLOREMNFT/IpsumOFLOREMNFT"
import { addIpsum, flapNSFW, Ipsum } from "../generated/schema"

function getIpsumkey(tokenId:BigInt, ipsumIdx:BigInt):string{
  return tokenId.toString().padStart(4,'0')+"-"+ipsumIdx.toString().padStart(4,'0')
}

export function handleIpsumAdded(event: IpsumAdded): void {

  let tokenContract = event.params.tokenContract;
  let tokenId = event.params.tokenId;
  let ipsumIdx = event.params.ipsumIdx;
  let creator = event.transaction.from;
  let timestamp = event.block.timestamp;

  let addipsum = new addIpsum(event.transaction.hash.toHexString())
  addipsum.tokenId = tokenId;
  addipsum.ipsumIdx = ipsumIdx
  addipsum.creator = creator;
  addipsum.createdAtTimeStamp = timestamp;
  addipsum.save();

  let ipsumKey = getIpsumkey(tokenId,ipsumIdx);
  let ipsum = new Ipsum(ipsumKey);

  let contract = IpsumOFLOREMNFT.bind(event.address);
  let IpsumfromContract = contract.IpsumAt(tokenContract,tokenId,ipsumIdx,ipsumIdx)[0];

  ipsum.tokenId = tokenId;
  ipsum.ipsumIdx = ipsumIdx;
  ipsum.ipsumMetadataURI = IpsumfromContract.ipsumMetadataURI;
  ipsum.nsfw = IpsumfromContract.nsfw;
  ipsum.ownerflip = IpsumfromContract.ownerflip;
  ipsum.adminflip = IpsumfromContract.adminflip;
  ipsum.creator = creator;
  ipsum.createdAtTimeStamp = timestamp;
  ipsum.save();
}

export function handleIpsumUpdated(event: IpsumUpdated): void {

  let tokenContract = event.params.tokenContract;
  let tokenId = event.params.tokenId;
  let ipsumIdx = event.params.ipsumIdx;

  let ipsumKey = getIpsumkey(tokenId,ipsumIdx);
  let ipsum = new Ipsum(ipsumKey);

  let contract = IpsumOFLOREMNFT.bind(event.address);
  let IpsumfromContract = contract.IpsumAt(tokenContract,tokenId,ipsumIdx,ipsumIdx)[0];

  ipsum.tokenId = tokenId;
  ipsum.ipsumIdx = ipsumIdx;
  ipsum.ipsumMetadataURI = IpsumfromContract.ipsumMetadataURI;
  ipsum.nsfw = IpsumfromContract.nsfw;
  ipsum.ownerflip = IpsumfromContract.ownerflip;
  ipsum.adminflip = IpsumfromContract.adminflip;
  ipsum.save();

}

export function handleIpsumUpdatednsfw(event: IpsumUpdatednsfw): void {

  let tokenContract = event.params.tokenContract;
  let tokenId = event.params.tokenId;
  let ipsumIdx = event.params.ipsumIdx;

  let flapnsfw = new flapNSFW(event.transaction.hash.toHexString())
  flapnsfw.tokenId = tokenId;
  flapnsfw.ipsumIdx = ipsumIdx;
  flapnsfw.modifier = event.transaction.from;
  flapnsfw.save();

  let ipsumKey = getIpsumkey(tokenId,ipsumIdx);
  let ipsum = new Ipsum(ipsumKey);

  let contract = IpsumOFLOREMNFT.bind(event.address);
  let IpsumfromContract = contract.IpsumAt(tokenContract,tokenId,ipsumIdx,ipsumIdx)[0];
  ipsum.nsfw = IpsumfromContract.nsfw;
  ipsum.save();

}