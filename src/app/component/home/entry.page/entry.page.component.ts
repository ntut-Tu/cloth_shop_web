import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry.page.component.html',
  styleUrls: ['./entry.page.component.css']
})
export class EntryPageComponent {
  constructor(private router: Router) {}

  enterSite() {
    setTimeout(() => {
      this.router.navigate(['/guest']);
    }, 1500);
  }

  setRandomParticlePosition(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();

    for (let i = 0; i < 20; i++) { // 粒子數量減少，提升自然感
      const particle = document.createElement('div');
      particle.className = 'particle';

      // 設置起始位置（按鈕中心）
      particle.style.left = `${rect.left + rect.width / 2}px`;
      particle.style.top = `${rect.top + rect.height / 2}px`;

      // 設置隨機方向，確保 Y 軸始終向上（負值）
      const randomX = (Math.random() - 0.5); // 範圍：-0.5 到 0.5
      const randomY = -Math.random(); // 範圍：-1 到 0（始終向上）
      particle.style.setProperty('--random-x', randomX.toString());
      particle.style.setProperty('--random-y', randomY.toString());

      // 隨機大小
      const size = Math.random() * 5 + 3; // 大小範圍：5px ~ 15px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 2000); // 2秒後移除
    }
  }


  triggerRippleEffect(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();

    for (let i = 0; i < 3; i++) { // 生成多個波紋
      const ripple = document.createElement('div');
      ripple.className = 'ripple';

      // 設置濂波大小
      const rippleWidth = rect.width * 2;  // 濂波寬度是按鈕的 2 倍
      const rippleHeight = rect.height * 1.5; // 濂波高度是按鈕的 1.5 倍
      ripple.style.width = `${rippleWidth}px`;
      ripple.style.height = `${rippleHeight}px`;

      // 濂波的位置，需扣除自身寬高的一半來居中
      ripple.style.left = `${rect.left + rect.width / 2 - rippleWidth / 2}px`;
      ripple.style.top = `${rect.top + rect.height / 2 - rippleHeight / 2}px`;

      // 初始化縮放和延遲動畫
      ripple.style.transform = 'scale(0)';
      ripple.style.animationDelay = `${i * 0.3}s`; // 每個波紋稍有延遲

      document.body.appendChild(ripple);

      // 設置定時器，移除濂波元素
      setTimeout(() => ripple.remove(), 2000); // 2秒後移除
    }
  }


  hideButton(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    button.style.transition = 'opacity 0.5s';
    button.style.opacity = '0';
    button.style.pointerEvents = 'none'; // 禁用按鈕
  }

}
