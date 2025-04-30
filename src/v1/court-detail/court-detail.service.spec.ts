import { Test, TestingModule } from '@nestjs/testing';
import { CourtDetailService } from './court-detail.service';

describe('CourtDetailService', () => {
  let service: CourtDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourtDetailService],
    }).compile();

    service = module.get<CourtDetailService>(CourtDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
