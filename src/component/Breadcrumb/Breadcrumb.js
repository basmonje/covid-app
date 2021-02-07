import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrumb({ data }) {
  const router = useRouter();
  const params = router.query;
  return (
    <div className="breadcrumb">
      <div className="bread-flex">
        <Link href="/">
          <a>{data.chile}</a>
        </Link>

        {data.region && params.slug && (
          <>
            <Front />
            <Link href="/region/[slug]" as={`/region/${params.slug}`}>
              <a>{data.region}</a>
            </Link>
          </>
        )}

        {data.comuna && params.comuna && (
          <>
            <Front />
            <Link
              href="/region/[slug]/[comuna]"
              as={`/region/${params.slug}/${params.comuna}`}
            >
              <a>{data.comuna}</a>
            </Link>
          </>
        )}
      </div>
      <style jsx>{`
        .breadcrumb {
          background: #e3f6f5;
          padding: 1rem 2rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border: 1px solid #3335;
          transition: all 300ms ease-in-out;
        }

        .breadcrumb:hover {
          border: 1px solid #333;
          transform: translate(0, -5px);
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
        }

        .breadcrumb a {
          color: #333;
          font-size: 1.6rem;
          font-weight: 600;
        }

        .breadcrumb a:hover {
          color: #393e46;
        }

        .breadcrumb a.active {
          color: #ef4f4f60;
        }

        .bread-flex {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 767px) {
          .bread-flex {
            flex-direction: row;
          }

          .bread-flex a {
            margin-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

const Front = () => (
  <span className="front" style={{ marginRight: "1rem" }}>
    /
  </span>
);
