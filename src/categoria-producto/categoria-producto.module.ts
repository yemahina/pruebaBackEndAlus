import { Module } from '@nestjs/common';
import { CategoriaProductoController } from './categoria-producto.controller';
import { CategoriaProductoService } from './categoria-producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProducto } from './entity/categoria-producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProducto])],
  controllers: [CategoriaProductoController],
  providers: [CategoriaProductoService],
})
export class CategoriaProductoModule {}
