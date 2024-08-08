package com.ayurhit.type;

public enum BloodGroup {
	A_POSITIVE("A+"), A_NEGATIVE("A-"), B_POSITIVE("B+"), B_NEGATIVE("B-"), AB_POSITIVE("AB+"), AB_NEGATIVE("AB-"),
	O_POSITIVE("O+"), O_NEGATIVE("O-");

	private final String code;

	
	BloodGroup(String code) {
		this.code = code;
	}

	public String getCode() {
		return code;
	}

	@Override
	public String toString() {
		return code;
	}

	public static BloodGroup fromCode(String code) {
		for (BloodGroup bloodGroup : BloodGroup.values()) {
			if (bloodGroup.code.equalsIgnoreCase(code)) {
				return bloodGroup;
			}
		}
		throw new IllegalArgumentException("Invalid blood group code: " + code);
	}
}
