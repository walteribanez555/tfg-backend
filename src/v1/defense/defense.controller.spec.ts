import { Test, TestingModule } from '@nestjs/testing';
import { DefenseController } from './defense.controller';
import { DefenseService } from './defense.service';

describe('DefenseController', () => {
  let controller: DefenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefenseController],
      providers: [DefenseService],
    }).compile();

    controller = module.get<DefenseController>(DefenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
