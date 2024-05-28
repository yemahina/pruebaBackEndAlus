import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaProductoController } from './categoria-producto.controller';

describe('CategoriaProductoController', () => {
  let controller: CategoriaProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaProductoController],
    }).compile();

    controller = module.get<CategoriaProductoController>(CategoriaProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
