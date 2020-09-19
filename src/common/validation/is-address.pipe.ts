import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { utils } from 'ethers';

export class IsAddressPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (!utils.isAddress(value)) throw new BadRequestException(`'${metadata.data}' ${metadata.type} should be an address`);
    return value;
  }
}
