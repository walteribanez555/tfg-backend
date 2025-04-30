import { Test, TestingModule } from '@nestjs/testing';
import { RevisionStepService } from './revision-step.service';

describe('RevisionStepService', () => {
  let service: RevisionStepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevisionStepService],
    }).compile();

    service = module.get<RevisionStepService>(RevisionStepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
