import { CalendarDays, Mail, Twitter, Instagram, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileProps {
  userData: any
}

export const Profile = ({ userData }: ProfileProps) => {
  const upcomingEvents = [
    { id: 1, name: "Summer Music Festival", date: "2023-07-15" },
    { id: 2, name: "Tech Conference 2023", date: "2023-08-22" },
  ]

  const pastEvents = [
    { id: 3, name: "Winter Concert", date: "2023-01-10" },
    { id: 4, name: "Art Exhibition", date: "2023-03-05" },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* <img
          src={userData?.banner}
          alt="Profile banner"
          className="w-full h-48 object-cover rounded-t-lg"
        /> */}

        <div className="w-full h-48 object-cover rounded-t-lg bg-gray-400">

        </div>

        <Avatar className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 border-4 border-background">
          <AvatarImage src={userData?.avatar ?? 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'} alt={userData?.name} />
          <AvatarFallback>{userData?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-16 px-4">
        {userData?.name &&
          <h1 className="text-2xl font-bold">{userData?.name}</h1>
        }

        {userData?.wallet &&
          <p className="text-lg font-semibold">
            <span className="hidden sm:inline">{userData.wallet}</span>
            <span className="inline sm:hidden">
              {userData.wallet.slice(0, 6)}...{userData.wallet.slice(-4)}
            </span>
          </p>
        }
        {userData?.email &&
          <div className="flex items-center mt-2 text-muted-foreground">
            <Mail className="w-4 h-4 mr-2" />
            <span>{userData?.email}</span>
          </div>
        }
        {/* <div className="flex mt-2 space-x-2">
          <Button variant="outline" size="sm">
            <Twitter className="w-4 h-4 mr-2" />
            @{userData?.twitter}
          </Button>
          <Button variant="outline" size="sm">
            <Instagram className="w-4 h-4 mr-2" />
            @{userData?.instagram}
          </Button>
        </div> */}
      </div>
      <div className="mt-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Upcoming Event Tickets</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingEvents.map((event: any) => (
            <Card key={event.id}>
              <CardContent className="p-4 flex items-center space-x-4">
                {event?.image && <div>
                  <img src={event?.image} alt={event.name} className="w-16 h-16 rounded-md object-cover" />
                </div>}
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {event.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* <div className="mt-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Past Events</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pastEvents.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-4 flex items-center space-x-4">
                <img src={event.image} alt={event.name} className="w-16 h-16 rounded-md object-cover" />
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {event.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </div>
  )
}