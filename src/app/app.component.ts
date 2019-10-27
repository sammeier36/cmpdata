import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(servertData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: servertData.serverName,
      content: servertData.serverContent
    });
  }

  onBlueprintAdded() {
    this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
