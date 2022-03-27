//#import "React/RCTViewManager.h"
//
//@interface RCT_EXTERN_MODULE(MyFirstTryArunRamyaViewManager, RCTViewManager)
//
//RCT_EXPORT_VIEW_PROPERTY(color, NSString)
//
//@end
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MyFirstTryArunRamya, NSObject)

RCT_EXTERN_METHOD(start:(NSDictionary *)paymentDetails withResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)

@end
