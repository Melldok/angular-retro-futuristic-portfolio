import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-render',
  standalone: true,
  imports: [CommonModule, BackgroundBannerComponent, TranslateModule],
  templateUrl: './ContactRender.component.html',
  styleUrls: ['./ContactRender.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactRenderComponent {
  private decodedMessages = {
    message: 'translated_message',
    buttonMessage: 'send_message',
  };

  private unDecodedMessages = {
    message:
      '67 117 114 114 101 110 116 108 121 32 73 32 97 109 32 110 111 116 32 108 111 111 107 105 110 103 32 102 111 114 32 97 32 106 111 98 44 32 98 117 116 32 73 32 97 109 32 97 108 119 97 121 115 32 111 112 101 110 32 116 111 32 109 101 101 116 32 110 101 119 32 112 101 111 112 108 101 32 97 110 100 32 111 112 112 111 114 116 117 110 105 116 105 101 115 44 32 108 101 97 118 101 32 97 32 109 101 115 115 97 103 101 33',
    buttonMessage: '115 101 110 100 32 109 101 115 115 97 103 101',
  };

  public message = signal<string>(this.unDecodedMessages.message);
  public buttonMessage = signal<string>(this.unDecodedMessages.buttonMessage);
  public fade = false;

  toggleDecoding() {
    this.fade = true;

    setTimeout(() => {
      this.message.set(
        this.message() === this.unDecodedMessages.message
          ? this.decodedMessages.message
          : this.unDecodedMessages.message
      );
      this.buttonMessage.set(
        this.buttonMessage() === this.unDecodedMessages.buttonMessage
          ? this.decodedMessages.buttonMessage
          : this.unDecodedMessages.buttonMessage
      );
      this.fade = false;
    }, 500);
  }

  openMail() {
    window.open('mailto:david.dokic28@gmail.com');
  }
}
