/* (c) Copyright Bojan Mazej, all rights reserved. */

export const isIntegerTooLong = (value: number): boolean => Math.abs(value).toString().length > 15;