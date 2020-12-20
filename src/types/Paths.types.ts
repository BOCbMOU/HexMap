import { IKeyString } from './Util.types';

const BasePath = {
  main: '/',
  ma: '/ma',
  ea: '/ea',
};

const MAPath = {
  spells: '/spells',
};

const EAPath = {
  mechanics: '/mechanics',
};

export const HrefPath = {
  base: BasePath,
  ma: MAPath,
  ea: EAPath,
};

// Init all paths

const addBasePath = (
  objPath: IKeyString<string>,
  basePathKey: keyof typeof BasePath
) => {
  Object.keys(objPath).forEach((key) => {
    objPath[key] = `${BasePath[basePathKey]}${objPath[key]}`;
  });
};

addBasePath(MAPath, 'ma');
addBasePath(EAPath, 'ea');
