import { onGetExploreGroup } from "@/actions/groups"
import {
    QueryClient
} from "@tanstack/react-query"

type Props = {}

const ExplorePage = async (props: Props) => {
  const query = new QueryClient()

  await query.prefetchQuery({
    queryKey: ["fitness"],
    queryFn: () => onGetExploreGroup("fitness", 0),
  })

  await query.prefetchQuery({
    queryKey: ["music"],
    queryFn: () => onGetExploreGroup("music", 0),
  })

  await query.prefetchQuery({
    queryKey: ["lifestyle"],
    queryFn: () => onGetExploreGroup("lifestyle", 0),
  })

  return (
    // <HydrationBoundary state={dehydrate(query)}>
    //   <ExplorePageContent layout="SLIDER" />
    // </HydrationBoundary>
    <div >
        <h1>Work in progres</h1>
    </div>
  )
}

export default ExplorePage