import { Test, TestingModule } from '@nestjs/testing';
import { ScholasticController } from './scholastic.controller';
import { ScholasticService } from './scholastic.service';

describe('ScholasticController', () => {
  let controller: ScholasticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScholasticController],
      providers: [ScholasticService],
    }).compile();

    controller = module.get<ScholasticController>(ScholasticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
