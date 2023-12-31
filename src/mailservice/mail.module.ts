import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        // host: 'smtp.gmail.email',
        service:'gmail', 
        auth: {
          user: 'avaneesh.ace@gmail.com',
          pass: 'enfogwsatwknccwj',
        },
      }
    })],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
