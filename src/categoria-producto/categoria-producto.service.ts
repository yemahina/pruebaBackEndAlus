import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CategoriaProducto } from './entity/categoria-producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaProductoService {
  constructor(
    @InjectRepository(CategoriaProducto)
    private repository: Repository<CategoriaProducto>,
  ) {}

}
