import { Controller, Get, Query } from '@nestjs/common';
import { CatalogoProductoService } from './catalogo-producto.service';
import { query } from 'express';

@Controller('catalogo-producto')
export class CatalogoProductoController {
  constructor(private catalogoProductoService: CatalogoProductoService) {}

  @Get()
  obtenerTodos() {
    return this.catalogoProductoService.findAll();
  }

  @Get('obtener-uno-por-id')
  obtenerUnoPorId(@Query() query) {
    return this.catalogoProductoService.findOneById(query.id_catalogo_producto);
  }
}
