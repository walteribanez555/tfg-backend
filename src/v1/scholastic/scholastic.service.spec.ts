import { Test, TestingModule } from '@nestjs/testing';
import { ScholasticService } from './scholastic.service';

describe('ScholasticService', () => {
  let service: ScholasticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScholasticService],
    }).compile();

    service = module.get<ScholasticService>(ScholasticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
