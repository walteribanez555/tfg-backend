import { Test, TestingModule } from '@nestjs/testing';
import { DefenseService } from './defense.service';

describe('DefenseService', () => {
  let service: DefenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefenseService],
    }).compile();

    service = module.get<DefenseService>(DefenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
