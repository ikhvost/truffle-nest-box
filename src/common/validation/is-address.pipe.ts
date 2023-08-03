import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { ethers } from 'ethers';

export class IsAddressPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (!ethers.isAddress(value)) throw new BadRequestException(`'${metadata.data}' ${metadata.type} should be an address`);
    return value;
  }
}
