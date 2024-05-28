import { Module } from '@nestjs/common';
import { CatalogoProductoController } from './catalogo-producto.controller';
import { CatalogoProductoService } from './catalogo-producto.service';

@Module({
  controllers: [CatalogoProductoController],
  providers: [CatalogoProductoService]
})
export class CatalogoProductoModule {}
