import React from "react";
import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
      <div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div><div>
      <h1>
        Welcome <span className="font-bold">{session?.user?.name},</span>
      </h1>
      <p>{JSON.stringify(session)}</p>
    </div>
    </div>
  );
};

export default DashboardPage;
