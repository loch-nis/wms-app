import {
  NotificationService,
  init_notification_service
} from "./chunk-JHZ6DDBS.js";
import "./chunk-TJLW6MN2.js";
import "./chunk-RXRLVWQJ.js";
import {
  TestBed,
  init_testing
} from "./chunk-PPYATBK3.js";
import "./chunk-TTULUY32.js";

// src/app/core/services/notification.service.spec.ts
init_testing();
init_notification_service();
describe("NotificationService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-services-notification.service.spec.js.map
