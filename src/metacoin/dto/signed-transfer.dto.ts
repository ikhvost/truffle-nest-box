import { IsNotEmptyString } from "../../common/validation/is-not-empty-string.pipe";

export class SignedTransferDto {
  @IsNotEmptyString()
  tx: string;
}
