import { IsNumberString } from 'class-validator';

export class IdCatalogoProductoDTO {
  @IsNumberString()
  id_catalogo_producto: string;
}
