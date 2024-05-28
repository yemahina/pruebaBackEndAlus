import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CatalogoProducto } from './entity/catalogo-producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogoProductoService {
  constructor(
    @InjectRepository(CatalogoProducto)
    private repository: Repository<CatalogoProducto>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOneById(id_catalogo_producto: number) {
    return this.repository.findOne({
      where: { id_catalogo_producto },
    });
  }
}
