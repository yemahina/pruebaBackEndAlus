import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoProductoService } from './catalogo-producto.service';

describe('CatalogoProductoService', () => {
  let service: CatalogoProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogoProductoService],
    }).compile();

    service = module.get<CatalogoProductoService>(CatalogoProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
