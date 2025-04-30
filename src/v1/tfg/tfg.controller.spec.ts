import { Test, TestingModule } from '@nestjs/testing';
import { TfgController } from './tfg.controller';
import { TfgService } from './tfg.service';

describe('TfgController', () => {
  let controller: TfgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TfgController],
      providers: [TfgService],
    }).compile();

    controller = module.get<TfgController>(TfgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
