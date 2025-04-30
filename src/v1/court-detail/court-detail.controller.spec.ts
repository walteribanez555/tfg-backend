import { Test, TestingModule } from '@nestjs/testing';
import { CourtDetailController } from './court-detail.controller';
import { CourtDetailService } from './court-detail.service';

describe('CourtDetailController', () => {
  let controller: CourtDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourtDetailController],
      providers: [CourtDetailService],
    }).compile();

    controller = module.get<CourtDetailController>(CourtDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
