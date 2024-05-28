import { Module } from '@nestjs/common';
import { CatalogoProductoController } from './catalogo-producto.controller';
import { CatalogoProductoService } from './catalogo-producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoProducto } from './entity/catalogo-producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatalogoProducto])],
  controllers: [CatalogoProductoController],
  providers: [CatalogoProductoService],
})
export class CatalogoProductoModule {}
