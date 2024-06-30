import { Test, TestingModule } from '@nestjs/testing';
import { OfficesController } from './offices.controller';

describe('OfficesController', () => {
  let controller: OfficesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficesController],
    }).compile();

    controller = module.get<OfficesController>(OfficesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
