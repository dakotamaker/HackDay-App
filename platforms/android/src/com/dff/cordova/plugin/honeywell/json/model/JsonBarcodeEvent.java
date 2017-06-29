package com.dff.cordova.plugin.honeywell.json.model;

import org.json.JSONException;
import org.json.JSONObject;

import com.honeywell.aidc.BarcodeReadEvent;

public class JsonBarcodeEvent {
	public static JSONObject toJson(BarcodeReadEvent event) throws JSONException {
		JSONObject jsonEvent = new JSONObject();
		
		if (event != null) {
			jsonEvent.put("aimId", event.getAimId());
			jsonEvent.put("barcodeData", event.getBarcodeData());
			jsonEvent.put("charset", event.getCharset().toString());
			jsonEvent.put("codeId", event.getCodeId());
			jsonEvent.put("timestamp", event.getTimestamp());
			jsonEvent.put("barcodeBounds", JsonPoint.toJson(event.getBarcodeBounds()));
		}
		
		return jsonEvent;
	}
}
