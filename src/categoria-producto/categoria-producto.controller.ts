import { Controller, Get } from '@nestjs/common';
import { CategoriaProductoService } from './categoria-producto.service';

@Controller('categoria-producto')
export class CategoriaProductoController {
  constructor(private categoriaProductoService: CategoriaProductoService) {}
}
