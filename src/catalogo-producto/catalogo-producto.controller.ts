import { Controller, Get, Query } from '@nestjs/common';
import { CatalogoProductoService } from './catalogo-producto.service';
import { IdCatalogoProductoDTO } from './dto/id-catalogo-producto.dto';

@Controller('catalogo-producto')
export class CatalogoProductoController {
  constructor(private catalogoProductoService: CatalogoProductoService) {}

  @Get()
  obtenerTodos() {
    return this.catalogoProductoService.findAll();
  }

  @Get('obtener-uno-por-id')
  obtenerUnoPorId(@Query() query: IdCatalogoProductoDTO) {
    return this.catalogoProductoService.findOneById(
      Number(query.id_catalogo_producto),
    );
  }
}
