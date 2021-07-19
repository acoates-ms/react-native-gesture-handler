package com.swmansion.gesturehandler.react

import android.os.Build
import android.view.View
import android.view.ViewGroup
import com.facebook.react.uimanager.PointerEvents
import com.facebook.react.uimanager.ReactPointerEventsView
import com.facebook.react.views.view.ReactViewGroup
import com.swmansion.gesturehandler.PointerEventsConfig
import com.swmansion.gesturehandler.ViewConfigurationHelper

class RNViewConfigurationHelper : ViewConfigurationHelper {
  override fun getPointerEventsConfigForView(view: View): PointerEventsConfig {
    val pointerEvents: PointerEvents
    pointerEvents = if (view is ReactPointerEventsView) (view as ReactPointerEventsView).pointerEvents else PointerEvents.AUTO

    // Views that are disabled should never be the target of pointer events. However, their children
    // can be because some views (SwipeRefreshLayout) use enabled but still have children that can
    // be valid targets.
    if (!view.isEnabled) {
      if (pointerEvents == PointerEvents.AUTO) {
        return PointerEventsConfig.BOX_NONE
      } else if (pointerEvents == PointerEvents.BOX_ONLY) {
        return PointerEventsConfig.NONE
      }
    }
    when (pointerEvents) {
      PointerEvents.BOX_ONLY -> return PointerEventsConfig.BOX_ONLY
      PointerEvents.BOX_NONE -> return PointerEventsConfig.BOX_NONE
      PointerEvents.NONE -> return PointerEventsConfig.NONE
    }
    return PointerEventsConfig.AUTO
  }

  override fun getChildInDrawingOrderAtIndex(parent: ViewGroup, index: Int): View {
    return if (parent is ReactViewGroup) {
      parent.getChildAt(parent.getZIndexMappedChildIndex(index))
    } else parent.getChildAt(index)
  }

  override fun isViewClippingChildren(view: ViewGroup): Boolean {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR2 && !view.clipChildren) {
      if (view is ReactViewGroup) {
        val overflow = view.overflow
        return "hidden" == overflow
      }
      return false
    }
    return true
  }
}