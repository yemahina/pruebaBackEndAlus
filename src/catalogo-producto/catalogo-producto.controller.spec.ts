import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoProductoController } from './catalogo-producto.controller';

describe('CatalogoProductoController', () => {
  let controller: CatalogoProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogoProductoController],
    }).compile();

    controller = module.get<CatalogoProductoController>(CatalogoProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
