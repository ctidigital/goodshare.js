/**
 *  CTI Digital <p.wolstenholme@ctidigital.com>
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Email provider.
 */

import { ProviderMixin } from "../utils/ProviderMixin";

export class Email extends ProviderMixin {
  constructor(url = document.location.href, title = document.title) {
    super();
    this.url = encodeURIComponent(url);
    this.title = encodeURIComponent(title);
    this.createEvents = this.createEvents.bind(this);
  }

  getPreparedData(item) {
    const url = item.dataset.url
      ? encodeURIComponent(item.dataset.url)
      : this.url;
    const title = item.dataset.title
      ? encodeURIComponent(item.dataset.title)
      : this.title;
    const share_url = `mailto:example@example.com?subject=${title}&body=${url}`;

    return {
      callback: this.callback,
      share_url: share_url,
      windowTitle: "Share this",
      windowOptions: "width=640,height=480,location=no,toolbar=no,menubar=no"
    };
  }

  // Share event
  shareWindow() {
    const share_elements = document.querySelectorAll('[data-social="email"]');

    return this.createEvents(share_elements);
  }
}
