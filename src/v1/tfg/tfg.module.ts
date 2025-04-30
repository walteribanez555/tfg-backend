import { Module } from '@nestjs/common';
import { TfgService } from './tfg.service';
import { TfgController } from './tfg.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tfg } from './entities/tfg.entity';

@Module({
  controllers: [TfgController],
  providers: [TfgService],
  imports: [TypeOrmModule.forFeature([Tfg])], // Add your entities here
  exports: [TypeOrmModule], // Export TypeOrmModule to be used in other modules
})
export class TfgModule {}
