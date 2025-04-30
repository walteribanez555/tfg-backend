import { Test, TestingModule } from '@nestjs/testing';
import { TfgService } from './tfg.service';

describe('TfgService', () => {
  let service: TfgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TfgService],
    }).compile();

    service = module.get<TfgService>(TfgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
