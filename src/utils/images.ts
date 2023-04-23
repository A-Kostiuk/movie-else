type BackdropType = 'backdrop'
type LogoType = 'logo'
type PosterType = 'poster'
type ProfileType = 'profile'
type StillType = 'still'

type BackdropSize = 'w300' | 'w780' | 'w1280' | 'original'
type LogoSize = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'
type PosterSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'
type ProfileSize = 'w45' | 'w185' | 'h632' | 'original'
type StillSize = 'w92' | 'w185' | 'w300' | 'original'

const SECURE_BASE_URL = 'https://image.tmdb.org/t/p/';

function getImageUrl(type: BackdropType, size: BackdropSize, path: string): string
function getImageUrl(type: LogoType, size: LogoSize, path: string): string
function getImageUrl(type: PosterType, size: PosterSize, path: string): string
function getImageUrl(type: ProfileType, size: ProfileSize, path: string): string
function getImageUrl(type: StillType, size: StillSize, path: string): string
function getImageUrl(type: any, size: any, path: string): any {
  return SECURE_BASE_URL + size + path;
}

export default getImageUrl;
