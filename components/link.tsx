"use client"

import NextLink from 'next/link'
import {useProgress} from "react-transition-progress"

type Props = Parameters<typeof NextLink>[0]
const Link = (props: Props) => <NextLink onClick={useProgress()} {...props} />

export default Link
