import { Test, TestingModule } from '@nestjs/testing';
import { RevisionStepController } from './revision-step.controller';
import { RevisionStepService } from './revision-step.service';

describe('RevisionStepController', () => {
  let controller: RevisionStepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevisionStepController],
      providers: [RevisionStepService],
    }).compile();

    controller = module.get<RevisionStepController>(RevisionStepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
