import { Controller, Get } from '@nestjs/common';
import { CatalogoProductoService } from './catalogo-producto.service';

@Controller('catalogo-producto')
export class CatalogoProductoController {
  constructor(private catalogoProductoService: CatalogoProductoService) {}

  @Get()
  obtenerTodos() {
    return this.catalogoProductoService.findAll();
  }
}
