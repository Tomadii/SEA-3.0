package de.telekom.sea3.webserver.looup;

public enum Salutation {

	FRAU,
	HERR,
	DIVERS,
	NN;
	
	public static Salutation fromString(String string) {
		switch (string.toUpperCase()) {
			case "FRAU":
			case "F":
				return FRAU;
			case "HERR":
			case "H":
			case "MANN":
			case "M":
				return HERR;
			case "DIVERS":
			case "D":
			case "OTHER":
			case "OTHERS":
			case "O":
				return DIVERS;
			case "":
			case "NN":
				return NN;
			default:
				throw new IllegalArgumentException("Unerwarteter Wert: " + string);
		
		}
	}
	
	public static Salutation fromShort(Short s ) {
		switch ( s ) {
			case 0:
				return FRAU;
			case 1:
				return HERR;
			case 2:
				return DIVERS;
			case 3:
				return NN;
			default:
				throw new IllegalArgumentException("Unerwarteter Wert: " + s);
		
		}
	}
	
	@Override
	public String toString() {
		switch (this) {
			case FRAU:
				return "Frau";
			case HERR:
				return "Herr";
			case DIVERS:
				return "Divers";
			case NN:
				return "NN";
			default:
				throw new IllegalArgumentException("Unerwarteter Fall");
		}
	}
	
	public short toShort() {
		switch (this) {
		case FRAU:
			return 0;
		case HERR:
			return 1;
		case DIVERS:
			return 2;
		case NN:
			return 3;
		default:
			throw new IllegalArgumentException("Unerwarteter Fall");
		}
	}

}
