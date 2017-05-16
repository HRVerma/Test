package com.xavient.poker.app;

public class Test {

	static int default_Size = 10;

	public static void main(String... arg) {

		System.out.println(" before size increase " + default_Size);
		default_Size = default_Size + (default_Size >> 1);

		System.out.println(" before size increase " + default_Size);

		default_Size = default_Size + (default_Size >> 1);

		System.out.println(" before size increase " + default_Size);

		default_Size = default_Size + (default_Size >> 1);

		System.out.println(" before size increase " + default_Size);
		default_Size = default_Size + (default_Size >> 1);

		System.out.println(" before size increase " + default_Size);

	}

}
