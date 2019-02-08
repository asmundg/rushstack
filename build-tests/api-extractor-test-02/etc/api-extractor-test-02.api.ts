// @public
interface GenericInterface<T> {
    // (undocumented)
    member: T;
}

// @public (undocumented)
declare function importDeduping1(arg1: ISimpleInterface, arg2: ISimpleInterface): void;

// @public (undocumented)
declare function importDeduping2(arg1: ISimpleInterface, arg2: ISimpleInterface): void;

// @public
declare class ImportedModuleAsBaseClass extends *.SemVer {
}

// @public
declare function importedModuleAsGenericParameter(): GenericInterface<*.SemVer> | undefined;

// @public
declare function importedModuleAsReturnType(): *.SemVer | undefined;

export { ReexportedClass as RenamedReexportedClass3 } from 'api-extractor-test-01';
// @public
declare class SubclassWithImport extends RenamedReexportedClass3 implements ISimpleInterface {
    // (undocumented)
    test(): void;
}

