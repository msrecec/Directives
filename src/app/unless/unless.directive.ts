import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * This sits on ng-template component
 *
 */

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  /**
   * This gets executed when ever the property changes
   *
   */

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
